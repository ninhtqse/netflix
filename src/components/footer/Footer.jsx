import { Apple, GitHub, Twitter, YouTube } from '@material-ui/icons';
import './footer.scss';

function Footer() {
    return (
        <div className="footer">
            <div className="container">
                <div className="footerLeft">
                    <div className="menuFooter">
                        <ul>
                            <li>Terms Of Use</li>
                            <li>Privacy-Policy</li>
                            <li>FAQ</li>
                            <li>Watch List</li>
                        </ul>
                    </div>
                    <p className="desc">© 2021 STREAMIT. All Rights Reserved. All videos and shows on this platform are trademarks of, and all related images and content are the property of, Streamit Inc. Duplication and copy of this is strictly prohibited. All rights reserved.</p>
                </div>
                <div className="footerRight">
                    <div className="follow">
                        <h3>Follow Us :</h3>
                        <ul>
                            <li><Twitter /></li>
                            <li><GitHub /></li>
                            <li><YouTube /></li>
                            <li><Apple /></li>
                        </ul>
                    </div>
                    <div className="streamit">
                        <h3>Streamit App</h3>
                        <img src="https://templates.iqonic.design/streamit/vue/dist/img/01.bf4adc4a.jpg" alt="" />
                        <img src="https://templates.iqonic.design/streamit/vue/dist/img/02.5365fd58.jpg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
