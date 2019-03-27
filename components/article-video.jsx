import { Component } from 'react';

export default class ArticleVideo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isInFocus: false
        };

        this.detectIframeFocus = this.detectIframeFocus.bind(this);
    }

    detectIframeFocus() {
        if (document.activeElement === document.getElementById('videoWindow')) {
            this.setState({
                isInFocus: true
            });
        }
    }

    componentDidMount() {
        focus();
        this.windowBlurListener = window.addEventListener('blur', this.detectIframeFocus);
    }
    
    componentWillUnmount() {
        window.removeEventListener('blur', this.windowBlurListener);
    }

    render() {
        const { isInFocus } = this.state;
        const { video } = this.props;

        return (
            <div className={`video-wrapper ${isInFocus ? 'focused' : ''}`}>
                <iframe id="videoWindow" className={`video-window ${isInFocus ? 'focused' : ''}`} src={video.url}></iframe>
                <h3 className="mb-0">{ video.title }</h3>
                <p className="mt-0">{ video.description }</p>
                <style jsx>{`
                    .mb-0 {
                        margin-bottom: 0;
                    }

                    .mt-0 {
                        margin-top: 0;
                    }

                    .video-window {
                        width: 100%;
                        height: calc(500px / 1.777);
                    }

                    .video-wrapper {
                        width: 500px;
                        float: right;
                        padding-left: 1rem;
                    }

                    .video-wrapper.focused {
                        width: 100%;
                        float: none;
                        padding-left: 0;
                    }

                    .video-window.focused {
                        height: calc(100vw / 1.777);
                    }

                    @media(max-width: 900px) {
                        .video-wrapper {
                            width: 100%;
                            float: none;
                            padding-left: 0;
                        }

                        .video-window {
                            height: calc(100vw / 1.777);
                        }
                    }
                `}</style>
            </div>
        );
    }
}
