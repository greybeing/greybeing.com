window.onload = window.alert('This page is in Beta! Kindly check back for updates.Thank you!');
document.body.style.background= "yellow";

//portfolio page menu bar by "agba-dev"

const CONTENT_WRAPPER_SELECTOR = 'content-wrapper';
const CONTENT_MENU_SELECTOR = 'content-menu';
const ALL_MENU_SELECTOR = `${CONTENT_MENU_SELECTOR}__all`;
const WEB_MENU_SELECTOR = `${CONTENT_MENU_SELECTOR}__web`;
const CLOUD_MENU_SELECTOR = `${CONTENT_MENU_SELECTOR}__cloud`;
const DEVOPS_MENU_SELECTOR = `${CONTENT_MENU_SELECTOR}__devops`;
const CONSULTANCY_MENU_SELECTOR = `${CONTENT_MENU_SELECTOR}__consultancy`;
const SHOW_SELECTOR = 'show-content';
const menuContentTitles = {
[ALL_MENU_SELECTOR]: 'all',
[WEB_MENU_SELECTOR]: 'web',
[CLOUD_MENU_SELECTOR]: 'cloud',
[DEVOPS_MENU_SELECTOR]: 'devops',
[CONSULTANCY_MENU_SELECTOR]: 'consultancy',
};

const displayContent = (contentTitle) => {
const contentWrapperEle = document.querySelector(`#${CONTENT_WRAPPER_SELECTOR}`);

if (contentWrapperEle) {
    Object.values(menuContentTitles).forEach((title) => {
        const CONTENT_SELECTOR = `${title}-content`;
        const content = contentWrapperEle.querySelector(`#${CONTENT_SELECTOR}`);

        if (!content || (title === contentTitle && content.classList.contains(SHOW_SELECTOR))) return;
        
        if (title === contentTitle) {
            content.classList.add(SHOW_SELECTOR);
        } else {
            content.classList.remove(SHOW_SELECTOR);
        }
    });
}
};


