const fs = require('fs');
const path = require('path');

test('La página debe contener mi nombre y matrícula', () => {
  const htmlContent = fs.readFileSync(path.resolve(__dirname, 'index.html'), 'utf-8');
  expect(html).toContain('Hola Mundo');
  expect(htmlContent).toContain('Daytson Bobadilla Montero');
  expect(htmlContent).toContain('2022-1078');
});