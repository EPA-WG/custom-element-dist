import ModuleUrl from "../../custom-element/module-url.js";

function cssRule2Obj( parent, /* CSSRule | CSSStyleSheet | CSSStyleRUle | CSSKeyframesRule | CSSNestedDeclarations */ s )
{
    if( s.cssRules)
        [...s.cssRules].forEach( r => cssRule2Obj( childrenRules, r ) );

    if( s.style )
        {   [...s.style].forEach( s1=>{ childrenRules[s1] = s.style.getPropertyValue(s1) }) }

    if( s.styleSheet )
        cssRule2Obj( childrenRules, s.styleSheet );

    let key = s.selectorText ||s.keyText || s.href|| s.ownerNode?.id|| s.ownerNode?.tagName;
    switch( s.type ){
        case 0: key = undefined; break; //CSSNestedDeclarations
        case CSSRule.KEYFRAMES_RULE: key = `@keyframes ${s.name}`; break;
        case CSSRule.FONT_FACE_RULE: key = `@font-face`; break;
        case CSSRule.IMPORT_RULE: key = s.cssText; break;
        case CSSRule.MEDIA_RULE: key = `@media ${s.conditionText}`; break;
    }

    if(key)
        parent[key] = childrenRules;
    return parent;
}

export class CssRulesElement extends HTMLElement
{
    connectedCallback()
    {
        const allRules = {};
        [ ...document.styleSheets ].forEach( s => { try{ cssRule2Obj( allRules, s) }catch(_){}});

        this.value = allRules;
        // this.dispatchEvent( new Event('change') );
    }
}
window.customElements.define( 'cem-css-rules', CssRulesElement );
