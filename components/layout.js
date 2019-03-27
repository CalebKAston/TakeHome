import Header from './header.jsx';

const Layout = (props) => (
    <div id="app">
        <Header />
        { props.children }
        <style jsx>{`
            #app {
                font-family: 'Open Sans', sans-serif;
                padding: 20px;
            }
        `}</style>
    </div>
);

export default Layout;