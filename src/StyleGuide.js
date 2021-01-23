import React, { Component } from "react";
import Styled from "react-styleguidist/lib/client/rsg-components/Styled";
import styles from "./StyleGuide.styles";
import Logo from "./Logo";

class StyleGuideRenderer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            active: false,
        };
    }

    render() {
        const { version, components, toc, children, hasSidebar, classes } = this.props;

        const sections = toc.props.sections.slice(0);

        for (let i = 0; i < sections.length; i += 1) {
            sections[i].callback = () => this.setState({ active: !this.state.active });

            for (let j = 0; j < sections[i].sections.length; j += 1) {
                sections[i].sections[j].callback = () =>
                    this.setState({ active: !this.state.active });
            }

            for (let j = 0; j < sections[i].components.length; j += 1) {
                sections[i].components[j].callback = () =>
                    this.setState({ active: !this.state.active });
            }
        }

        React.cloneElement(toc, { sections });

        return (
            <div className={classes.root}>
                {hasSidebar && (
                    <div
                        className={`${classes.sidebar} ${
                            this.state.active ? "active" : ""
                        }`}
                    >
                        <button
                            className={classes.close}
                            onClick={() => this.setState({ active: !this.state.active })}
                        />
                        <div className={classes.logo}>
                            <Logo />
                        </div>
                        {version && <h2 className={classes.version}>{version}</h2>}
                        {toc}
                    </div>
                )}
                <div className={classes.hero}>
                    <svg
                        className={classes.bg}
                        preserveAspectRatio="none"
                        width="844px"
                        height="355px"
                        viewBox="0 0 844 355"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <defs>
                            <linearGradient
                                x1="-30.3222114%"
                                y1="34.6731086%"
                                x2="111.825402%"
                                y2="-25.5078125%"
                                id="linearGradient-1"
                            >
                                <stop stopColor="#00BCD4" offset="0%" />
                                <stop stopColor="#00BCD4" offset="17.2957751%" />
                                <stop stopColor="#00BCD4" offset="80.1567622%" />
                                <stop stopColor="#00BCD4" offset="100%" />
                            </linearGradient>
                        </defs>
                        <g
                            id="Page-1"
                            stroke="none"
                            strokeWidth="1"
                            fill="none"
                            fillRule="evenodd"
                        >
                            <g
                                id="00_DO_DS_Intro"
                                transform="translate(-180.000000, 0.000000)"
                                fill="url(#linearGradient-1)"
                                fillRule="nonzero"
                            >
                                <path
                                    d="M180,0.934038983 L1024,0 L1024,318.693787 C853.593349,367.102071 712.77056,367.102071 601.531632,318.693787 C490.292703,270.285504 349.78216,270.285504 180,318.693787 L180,0.934038983 Z"
                                    id="Rectangle"
                                />
                            </g>
                        </g>
                    </svg>
                    <button
                        className={classes.menu}
                        onClick={() => this.setState({ active: !this.state.active })}
                    >
                        <div className={classes.menuBar} />
                        <div className={classes.menuBar} />
                        <div className={classes.menuBar} />
                    </button>
                    <div className={classes.heroContent}>
                        <div className={classes.heading1}>UItools Design System</div>
                        <div className={classes.heading2}>
                            UX and UI component guidelines for building web apps
                        </div>
                    </div>
                </div>
                <div className={classes.content}>
                    {components}
                    {children}
                </div>
                <footer className={classes.footer}>
                    Made with{" "}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="18"
                        height="18"
                        fill="#ff5452"
                        className={classes.heart}
                    >
                        <path d="M19.9 5.8c-1.5-2-4.2-2.3-6.2-.9-.7.5-1.2 1.2-1.6 2 0 .1-.1.1-.2 0-.3-.8-.8-1.5-1.6-2-2-1.4-4.7-1-6.2.9-1.6 2-1.5 5.2.3 7.1l7 7.8c.3.4.9.4 1.3 0l7-7.8c1.7-1.9 1.8-5.1.2-7.1z" />
                    </svg>{" "}
                    by{" "}
                    <a
                        href="https://nikitababko.github.io/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Nikita Babko
                    </a>
                </footer>
            </div>
        );
    }
}

export default Styled(styles)(StyleGuideRenderer);
