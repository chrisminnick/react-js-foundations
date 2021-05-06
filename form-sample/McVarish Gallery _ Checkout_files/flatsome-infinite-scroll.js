/* global flatsome_infinite_scroll, Packery, ga */
jQuery(document).ready(function () {
  var container = jQuery('.shop-container .products')
  var paginationNext = '.woocommerce-pagination li a.next'

  if (container.length === 0 || jQuery(paginationNext).length === 0) {
    return
  }

  var viewMoreButton = jQuery('button.view-more-button.products-archive')
  var byButton = flatsome_infinite_scroll.type === 'button'
  var isMasonry = flatsome_infinite_scroll.list_style === 'masonry'
  // Set packery instance as outlayer when masonry is set.
  var outlayer = isMasonry ? Packery.data(container[0]) : false

  var $container = container.infiniteScroll({
    path: paginationNext,
    append: '.shop-container .product',
    checkLastPage: true,
    status: '.page-load-status',
    hideNav: '.archive .woocommerce-pagination',
    button: '.view-more-button',
    history: flatsome_infinite_scroll.history,
    debug: false,
    outlayer: outlayer,
    scrollThreshold: parseInt(flatsome_infinite_scroll.scroll_threshold)
  })

  if (byButton) {
    viewMoreButton.removeClass('hidden')
    $container.infiniteScroll('option', {
      scrollThreshold: false,
      loadOnScroll: false
    })
  }

  $container.on('load.infiniteScroll', function (event, response, path) {
    flatsomeInfiniteScroll.attachBehaviors(response)
  })

  $container.on('request.infiniteScroll', function (event, path) {
    if (byButton) viewMoreButton.addClass('loading')
  })

  $container.on('append.infiniteScroll', function (event, response, path, items) {
    if (byButton) viewMoreButton.removeClass('loading')

    // Fix Safari bug
    jQuery(items).find('img').each(function (index, img) {
      img.outerHTML = img.outerHTML
    })

    // Load fragments and init_handling_after_ajax for new items.
    jQuery(document).trigger('yith_wcwl_reload_fragments')
    // Trigger resize for product box equalizer.
    window.dispatchEvent(new Event('resize'))

    Flatsome.attach('lazy-load-images', container)
    flatsomeInfiniteScroll.animateNewItems(items)

    if (isMasonry) {
      setTimeout(function () {
        $container.imagesLoaded(function () {
          $container.packery('layout')
        })
      }, 500)
    }

    if (window.ga && ga.loaded && typeof ga === 'function') {
      var link = document.createElement('a')
      link.href = path
      ga('set', 'page', link.pathname)
      ga('send', 'pageview')
    }
  })

  var flatsomeInfiniteScroll = {
    attachBehaviors: function (response) {
      Flatsome.attach('quick-view', response)
      Flatsome.attach('tooltips', response)
      Flatsome.attach('add-qty', response)
      Flatsome.attach('wishlist', response)
    },
    animateNewItems: function (items) {
      if (isMasonry) return
      jQuery(items).hide().fadeIn(parseInt(flatsome_infinite_scroll.fade_in_duration))
    }
  }
})
