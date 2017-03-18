import {init} from '../../src/ma'
import data from '../mocks/demo'

describe('demo_spec', function(){
    it('body',() => {
        init();
        let button = document.querySelector('.btn');
        button.textContent = data.btnName;
        expect(button.textContent).toEqual(data.btnName);
    })
});
