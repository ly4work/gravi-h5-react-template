import 'zarm/dist/zarm.css';

export function render(oldRender: any) {
  console.log('wait for 1s');
  oldRender();

  setTimeout(() => {
    console.log('do render');
  }, 1000);
}
