import ColorSchema from './ColorSchema';

class Palette extends ColorSchema {

    constructor(mode) {
        super();
        if (mode === 'light' || mode === 'dark') {  
            this.mode = mode;
        }
        else {
            this.mode = 'light';
        }
    }

    setMode(mode) {
        if (mode === 'light' || mode === 'dark') {  
            this.mode = mode;
        }
        else {
            this.mode = 'light';
        }
    }
}

export default Palette;