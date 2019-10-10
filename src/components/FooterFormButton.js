import React from 'react'

const FooterButton = (props) => {

const {submitLabel, otherLabel, goToLink, history} = props;

    return (
            <footer class="auth__footer">
                <button type="submit" class="auth__button auth__button--login">{submitLabel}</button>
                <button type="button" class="auth__button auth__button--signup" onClick={() => {
                history.push(goToLink);
                        }}>{otherLabel}</button>
            </footer>
            );
};

export default FooterButton;