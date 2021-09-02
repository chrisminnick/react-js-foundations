import WelcomeMessage from './WelcomeMessage';

function WelcomeTitle(){
    return <>
    <WelcomeMessage />
    <pre>
{`import WelcomeMessage from './WelcomeMessage';

function WelcomeTitle(){
    return <WelcomeMessage />;
}

export default WelcomeTitle;`}
    </pre>
    </>;
}

export default WelcomeTitle;