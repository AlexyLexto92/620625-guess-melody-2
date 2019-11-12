function createNodeMock(element, type = `audio`) {
  return element.type === type ? {} : null;
}
export {createNodeMock};
