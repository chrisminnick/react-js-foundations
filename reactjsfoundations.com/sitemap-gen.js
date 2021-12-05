require("babel-register")({
    presets: ["es2015", "react"],
    
  });
   
  const router = require("./src/sitemap-routes").default;
  const Sitemap = require("react-router-sitemap").default;
  
  function generateSitemap() {
      return (
        new Sitemap(router)
            .build("https://www.reactjsfoundations.com")
            .save("./public/sitemap.xml")
      );
  }
  
  generateSitemap();