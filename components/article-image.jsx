import { Component } from 'react';

export default class ArticleImage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            focusedImage: props.images[0]
        };

        this.focusImage = this.focusImage.bind(this);
    }

    focusImage(image) {
        this.setState({
            focusedImage: image
        });
    }

    render() {
        const { focusedImage } = this.state;
        const { images } = this.props;

        return (
            <div>
                <img className="main-image" src={`https://${focusedImage.mainUrl}`} />
                <div className="sub-image-bar">
                    <div>
                        <h3 className="mb-0">{ focusedImage.title }</h3>
                        <p className="mt-0">{ focusedImage.description }</p>
                    </div>
                    <div className="thumbnails">
                        {images.map(image => (
                            <img key={image.mainUrl} onClick={() => this.focusImage(image)} className={`thumbnail ${image.mainUrl === focusedImage.mainUrl ? 'bordered' : ''}`} src={`https://${image.thumbnailUrl}`} />
                        ))}
                    </div>
                </div>
                <style jsx>{`
                    .main-image {
                        width: 100%;
                    }

                    .sub-image-bar {
                        display: flex;
                        flex-wrap: wrap;
                    }

                    .sub-image-bar > div {
                        flex: 1 50%;
                    }

                    .bordered {
                        border: 4px solid black;
                    }

                    .thumbnails {
                        text-align: right;
                    }

                    .thumbnail {
                        width: 90px;
                        margin-left: 1rem;
                        cursor: pointer;
                    }

                    .mb-0 {
                        margin-bottom: 0;
                    }

                    .mt-0 {
                        margin-top: 0;
                    }

                    @media(max-width: 900px) {
                        .thumbnails {
                            order: -1;
                        }

                        .sub-image-bar > div {
                            flex-basis: 100%;
                        }

                        .thumbnail {
                            width: 75px;
                            margin-left: 0.75rem;
                        }
                    }

                    @media(max-width: 700px) {
                        .thumbnail {
                            width: 50px;
                            margin-left: 0.5rem;
                        }
                    }
                `}</style>
            </div>
        );
    }
}
