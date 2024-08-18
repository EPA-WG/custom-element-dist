const attr = ( el, attr )=> el.getAttribute( attr );


export class ModuleUrl extends HTMLElement
{
    static observedAttributes=
            [   'slice'
            ,   'src' // module path, relative or absolute URL
            ];

    sliceInit()
    {   const path = attr(this,'src');
        try{   this.setAttribute('value',this.value = import.meta.resolve(path) ) }
        catch( er )
            {   this.setAttribute('error', er.message);
                this.setAttribute('value', path);
                console.error(er.message ?? er, path); }
        this.dispatchEvent( new Event('change') );
    }
    attributeChangedCallback( name, oldValue, newValue )
    {
        if( 'src'=== name )
            this.sliceInit();
    }
}

window.customElements.define( 'module-url', ModuleUrl );
export default ModuleUrl;