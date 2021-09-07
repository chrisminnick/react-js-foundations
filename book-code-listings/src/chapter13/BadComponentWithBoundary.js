import ErrorBoundary from './ErrorBoundary';

function BadComponentContainer(){
    return (
        <>
        <ErrorBoundary>
            <BadComponent />
        </ErrorBoundary>
        <pre>
            {`import ErrorBoundary from './ErrorBoundary';

function BadComponentContainer(){
    return (
        <ErrorBoundary>
            <BadComponent />
        </ErrorBoundary>
    )
}

function BadComponent(){
    return (
      {oops:"this is not good"}
    );
}

export default BadComponentContainer;
  `}
        </pre>
        </>
    )
}

function BadComponent(){
    return (
      {oops:"this is not good"}
    );
}

export default BadComponentContainer;
  