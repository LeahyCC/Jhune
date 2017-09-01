import React, { Component } from 'react';

class Header extends Component {
    render(){
        return (
            <div>
                <meta charset="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

                <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
                <link rel="shortcut icon" href="%PUBLIC_URL%/favicon.ico" />

                <title>Jhune</title>
            </div>
        );
    }
}

export default Header;