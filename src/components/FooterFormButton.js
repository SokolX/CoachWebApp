import React from 'react'

        const FooterButton = (props) => {

    const {submitLabel, otherLabel, goToLink, history} = props;

    return (
            <div>
                <footer class="footer-start-page">
                    <button type="submit" className="btn btn-primary">{submitLabel}</button>
                    <button type="button" className="btn btn-danger" onClick={() => {
                    history.push(goToLink);
                            }}>{otherLabel}</button>
                </footer>
            </div>
                );
};
export default FooterButton;