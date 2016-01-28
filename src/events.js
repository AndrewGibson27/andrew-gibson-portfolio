import evenColumns from './column-height';
import { panelShow, bindPanelClose } from './panel';
import { debounce, once } from './utils';
import { TRANSITION_LENGTH } from './constants';

export default function bindEvents() {
    bindOnLoad();
    bindOnScroll();
    bindWindowResize();
    bindPanelClose();
}

function bindWindowResize() {
    window.addEventListener('resize', debounce(function(){
        evenColumns();
    }, 250, false));
}

function bindOnLoad() {
    window.addEventListener('load', function(){
        $('.fade-el').removeClass('fade-el--faded-out');
        
        setTimeout(function(){
            $('.fade-el').removeClass('fade-el--accelerated');
        }, TRANSITION_LENGTH);
    });
}

function bindOnScroll() {
    window.addEventListener('scroll', once(function(){
        panelShow();
    }));
}