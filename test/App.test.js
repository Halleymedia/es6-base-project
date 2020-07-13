import { JSDOM } from 'jsdom';
import App from '../src/App';

it('Should fill the container element with some content', () => {
    //Arrange
    const dom = new JSDOM('<!DOCTYPE html><html><head></head><body></body></html>');
    const containerElement = dom.window.document.body;

    //Act
    const app = new App(containerElement);

    //Assert
    expect(app).toBeInstanceOf(App);
    expect(containerElement.innerHTML).not.toBeFalsy();
});