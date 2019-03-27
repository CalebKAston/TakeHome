import { Component, useState } from 'react';
import fetch from 'isomorphic-unfetch';
import Link from 'next/link';

export default class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isArchiveDropdownOpen: false,
            articles: []
        };

        fetch(`https://interview-project-17987.herokuapp.com/api/article`)
            .then(response => response.json())
            .then(data => this.setState({ articles: data }));

        this.toggleArchiveDropdown = this.toggleArchiveDropdown.bind(this);
    }

    toggleArchiveDropdown() {
        this.setState({
            isArchiveDropdownOpen: !this.state.isArchiveDropdownOpen
        });
    }

    render() {
        const { isArchiveDropdownOpen, articles } = this.state;
        return (
            <header>
                <Link href="/"><a className="header-title">Take Home Test</a></Link>
                <div className="archive-dropdown">
                    <span onClick={this.toggleArchiveDropdown} className="archive-dropdown-toggle">Archive</span>
                    <div className={`archive-dropdown-content ${isArchiveDropdownOpen ? 'show' : ''}`}>
                        <ul>
                            {articles.map(article => (
                                <li key={article.url}>
                                    <Link href={`/article/${article.url}`}>
                                        <a>{ article.title }</a>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <style jsx>{`
                    .header-title {
                        font-size: 1.5rem;
                        font-weight: bold;
                        margin-right: 1rem;
                        cursor: pointer;
                        color: black;
                        text-decoration: none;
                    }
    
                    header {
                        display: flex;
                        border: 1px solid grey;
                        padding: 20px;
                    }
    
                    .archive-dropdown {
                        position: relative;
                    }
    
                    .archive-dropdown-toggle {
                        cursor: pointer;
                        font-size: 1.5rem;
                    }
    
                    .archive-dropdown-content {
                        display: none;
                        position: absolute;
                        top: 100%;
                        border: 1px solid grey;
                        background: white;
                        padding: 20px;
                        width: 400px;
                    }
    
                    .archive-dropdown-content ul {
                        list-style-type: none;
                        padding: 0;
                        margin: 0;
                    }
    
                    .archive-dropdown-content ul li {
                        font-size: 1.25rem;
                        margin-bottom: 0.5rem;
                        cursor: pointer;
                    }

                    .archive-dropdown-content ul li a {
                        text-decoration: none;
                        color: black;
                    }
    
                    .archive-dropdown-content.show {
                        display: block;
                    }
                `}</style>
            </header>
        );
    }
}