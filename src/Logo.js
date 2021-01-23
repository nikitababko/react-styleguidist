import React, { Fragment } from "react";

const Logo = () => {
    const styleLogo = {
        width: "100%",
        display: "flex",
        justifyContent: "center",
    };
    return (
        <Fragment>
            <div className="logo-img" style={styleLogo}>
                <svg
                    width="87"
                    height="88"
                    viewBox="0 0 87 88"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <circle
                        cx="44.1495"
                        cy="44.149"
                        r="8.4403"
                        fill="white"
                        stroke="#FF5722"
                        stroke-width="6.49254"
                    />
                    <circle
                        cx="11.6866"
                        cy="11.6866"
                        r="8.4403"
                        fill="white"
                        stroke="#F50056"
                        stroke-width="6.49254"
                    />
                    <circle
                        cx="75.3135"
                        cy="11.6866"
                        r="8.4403"
                        fill="white"
                        stroke="#0AB4FF"
                        stroke-width="6.49254"
                    />
                    <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M55.3636 11.9463C55.3636 18.544 50.0521 23.8925 43.5 23.8925C36.9479 23.8925 31.6364 18.544 31.6364 11.9463C31.6364 5.34853 36.9479 0 43.5 0C50.0521 0 55.3636 5.34853 55.3636 11.9463ZM11.8636 55.7493C18.4157 55.7493 23.7273 50.4007 23.7273 43.803C23.7273 37.2052 18.4157 31.8567 11.8636 31.8567C5.31154 31.8567 0 37.2052 0 43.803C0 50.4007 5.31154 55.7493 11.8636 55.7493ZM75.1364 55.7493C81.6885 55.7493 87 50.4007 87 43.803C87 37.2052 81.6885 31.8567 75.1364 31.8567C68.5843 31.8567 63.2727 37.2052 63.2727 43.803C63.2727 50.4007 68.5843 55.7493 75.1364 55.7493ZM11.8636 87.606C18.4157 87.606 23.7273 82.2574 23.7273 75.6597C23.7273 69.062 18.4157 63.7134 11.8636 63.7134C5.31154 63.7134 0 69.062 0 75.6597C0 82.2574 5.31154 87.606 11.8636 87.606ZM55.3636 75.6597C55.3636 82.2574 50.0521 87.606 43.5 87.606C36.9479 87.606 31.6364 82.2574 31.6364 75.6597C31.6364 69.062 36.9479 63.7134 43.5 63.7134C50.0521 63.7134 55.3636 69.062 55.3636 75.6597ZM75.1364 87.606C81.6885 87.606 87 82.2574 87 75.6597C87 69.062 81.6885 63.7134 75.1364 63.7134C68.5843 63.7134 63.2727 69.062 63.2727 75.6597C63.2727 82.2574 68.5843 87.606 75.1364 87.606Z"
                        fill="#00BCD4"
                    />
                </svg>
            </div>
            <div className="logo-title" style={styleLogo}>
                <svg
                    width="224"
                    height="55"
                    viewBox="0 0 224 55"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M39.3125 2.8125V36.5273C39.3125 42.1289 37.5547 46.5586 34.0391 49.8164C30.5469 53.0742 25.7656 54.7031 19.6953 54.7031C13.7188 54.7031 8.97266 53.1211 5.45703 49.957C1.94141 46.793 0.148438 42.4453 0.078125 36.9141V2.8125H10.625V36.5977C10.625 39.9492 11.4219 42.3984 13.0156 43.9453C14.6328 45.4688 16.8594 46.2305 19.6953 46.2305C25.625 46.2305 28.6367 43.1133 28.7305 36.8789V2.8125H39.3125Z"
                        fill="#F50056"
                    />
                    <path d="M59.1758 54H48.6289V2.8125H59.1758V54Z" fill="#FF5722" />
                    <path
                        d="M80.4805 6.60938V15.9609H86.9844V23.4141H80.4805V42.3984C80.4805 43.8047 80.75 44.8125 81.2891 45.4219C81.8281 46.0312 82.8594 46.3359 84.3828 46.3359C85.5078 46.3359 86.5039 46.2539 87.3711 46.0898V53.7891C85.3789 54.3984 83.3281 54.7031 81.2188 54.7031C74.0938 54.7031 70.4609 51.1055 70.3203 43.9102V23.4141H64.7656V15.9609H70.3203V6.60938H80.4805Z"
                        fill="#0AB4FF"
                    />
                    <path
                        d="M91.0625 34.6289C91.0625 30.8555 91.7891 27.4922 93.2422 24.5391C94.6953 21.5859 96.7812 19.3008 99.5 17.6836C102.242 16.0664 105.418 15.2578 109.027 15.2578C114.16 15.2578 118.344 16.8281 121.578 19.9688C124.836 23.1094 126.652 27.375 127.027 32.7656L127.098 35.3672C127.098 41.2031 125.469 45.8906 122.211 49.4297C118.953 52.9453 114.582 54.7031 109.098 54.7031C103.613 54.7031 99.2305 52.9453 95.9492 49.4297C92.6914 45.9141 91.0625 41.1328 91.0625 35.0859V34.6289ZM101.223 35.3672C101.223 38.9766 101.902 41.7422 103.262 43.6641C104.621 45.5625 106.566 46.5117 109.098 46.5117C111.559 46.5117 113.48 45.5742 114.863 43.6992C116.246 41.8008 116.938 38.7773 116.938 34.6289C116.938 31.0898 116.246 28.3477 114.863 26.4023C113.48 24.457 111.535 23.4844 109.027 23.4844C106.543 23.4844 104.621 24.457 103.262 26.4023C101.902 28.3242 101.223 31.3125 101.223 35.3672ZM131.773 34.6289C131.773 30.8555 132.5 27.4922 133.953 24.5391C135.406 21.5859 137.492 19.3008 140.211 17.6836C142.953 16.0664 146.129 15.2578 149.738 15.2578C154.871 15.2578 159.055 16.8281 162.289 19.9688C165.547 23.1094 167.363 27.375 167.738 32.7656L167.809 35.3672C167.809 41.2031 166.18 45.8906 162.922 49.4297C159.664 52.9453 155.293 54.7031 149.809 54.7031C144.324 54.7031 139.941 52.9453 136.66 49.4297C133.402 45.9141 131.773 41.1328 131.773 35.0859V34.6289ZM141.934 35.3672C141.934 38.9766 142.613 41.7422 143.973 43.6641C145.332 45.5625 147.277 46.5117 149.809 46.5117C152.27 46.5117 154.191 45.5742 155.574 43.6992C156.957 41.8008 157.648 38.7773 157.648 34.6289C157.648 31.0898 156.957 28.3477 155.574 26.4023C154.191 24.457 152.246 23.4844 149.738 23.4844C147.254 23.4844 145.332 24.457 143.973 26.4023C142.613 28.3242 141.934 31.3125 141.934 35.3672ZM184.789 54H174.594V0H184.789V54ZM213.793 43.4883C213.793 42.2461 213.172 41.2734 211.93 40.5703C210.711 39.8438 208.742 39.1992 206.023 38.6367C196.977 36.7383 192.453 32.8945 192.453 27.1055C192.453 23.7305 193.848 20.918 196.637 18.668C199.449 16.3945 203.117 15.2578 207.641 15.2578C212.469 15.2578 216.324 16.3945 219.207 18.668C222.113 20.9414 223.566 23.8945 223.566 27.5273H213.406C213.406 26.0742 212.938 24.8789 212 23.9414C211.062 22.9805 209.598 22.5 207.605 22.5C205.895 22.5 204.57 22.8867 203.633 23.6602C202.695 24.4336 202.227 25.418 202.227 26.6133C202.227 27.7383 202.754 28.6523 203.809 29.3555C204.887 30.0352 206.691 30.6328 209.223 31.1484C211.754 31.6406 213.887 32.2031 215.621 32.8359C220.988 34.8047 223.672 38.2148 223.672 43.0664C223.672 46.5352 222.184 49.3477 219.207 51.5039C216.23 53.6367 212.387 54.7031 207.676 54.7031C204.488 54.7031 201.652 54.1406 199.168 53.0156C196.707 51.8672 194.773 50.3086 193.367 48.3398C191.961 46.3477 191.258 44.2031 191.258 41.9062H200.891C200.984 43.7109 201.652 45.0938 202.895 46.0547C204.137 47.0156 205.801 47.4961 207.887 47.4961C209.832 47.4961 211.297 47.1328 212.281 46.4062C213.289 45.6562 213.793 44.6836 213.793 43.4883Z"
                        fill="#00BCD4"
                    />
                </svg>
            </div>
        </Fragment>
    );
};

export default Logo;