import expect from 'expect.js';
import {validate, file} from '../src/validate';

describe('Functions file', () => {
    describe('#extensionFile(value)', () => {
        it('should be true when extension of file is equal jpg/png/pdf', () => {
            let result = validate(file.extensionFile(['jpg','png','pdf']));
            
            expect(result('teste.jpg')).to.be.ok();
            expect(result('teste.png')).to.be.ok();
            expect(result('teste.pdf')).to.be.ok();
        });
        it('should be false when the file extension is different from jpg', () => {
            let result = validate(file.extensionFile(['jpg']));
            
            expect(result('teste.png')).to.not.be.ok();
        });
        it('should be true when extension of file is equal jpg/png/pdf', () => {
            let fileAbstract = {name:'name.jpg',size:250000};
            let result = validate(file.extensionFile(['jpg','png','pdf']));
            
            expect(result(fileAbstract)).to.be.ok();
            fileAbstract.name='name.png';
            expect(result(fileAbstract)).to.be.ok();
            fileAbstract.name='name.pdf';
            expect(result(fileAbstract)).to.be.ok();
        });
        it('should be false when the file extension is different from jpg', () => {
            let fileAbstract = {name:'name.png',size:250000};
            let result = validate(file.extensionFile(['jpg']));

            expect(result(fileAbstract)).to.not.be.ok();
        });
    });

    describe('#maxSizeFile(value)', () => {
        it('should be true when size of file in byte is <= maxSize in kilobyte ', () => {
            let fileAbstract  = {name:'name.jpg',size:1024};//size in Byte
            let result = validate(file.maxSizeFile(1));//size in Kilobyte

            expect(result(fileAbstract)).to.be.ok();
        });
        it('should be false when size of file in byte is > maxSize in kilobyte ', () => {
            let fileAbstract  = {name:'name.jpg',size:1025};//size in Byte
            let result = validate(file.maxSizeFile(1));//size in Kilobyte

            expect(result(fileAbstract)).to.not.be.ok();
        });
    });
});