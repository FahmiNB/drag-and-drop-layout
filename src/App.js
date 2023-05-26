import PageLayout from "./PageLayout"
import "./styles.css";
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';

const layouts = {
  xxl: [
    { i: "l1", x: 0, y: 0, w: 4, h: 4, resizeHandles: ["e"] },
    { i: "m1", x: 4, y: 0, w: 4, h: 3 },
    { i: "m2", x: 4, y: 5, w: 4, h: 3 },
    { i: "r1", x: 8, y: 0, w: 4, h: 5 },
    { i: "l2", x: 0, y: 8, w: 4, h: 5 },
    { i: "m3", x: 4, y: 9, w: 4, h: 3 },
    { i: "r2", x: 8, y: 8, w: 4, h: 2 },
    { i: "r3", x: 8, y: 0, w: 4, h: 2, static: true}, // 간격을 y 로 지정 하려면 static: true 로 지정 해야함. 
    { i: "r4", x: 8, y: 0, w: 4, h: 2, }
  ],
  xl: [
    { i: "l1", x: 0, y: 0, w: 3, h: 4, resizeHandles: ["e"] },
    { i: "m1", x: 3, y: 0, w: 4, h: 3 },
    { i: "m2", x: 3, y: 5, w: 4, h: 3 },
    { i: "r1", x: 8, y: 0, w: 3, h: 5 },
    { i: "l2", x: 0, y: 8, w: 3, h: 5 },
    { i: "m3", x: 3, y: 9, w: 4, h: 3 },
    { i: "r2", x: 8, y: 8, w: 3, h: 2 },
    { i: "r3", x: 8, y: 0, w: 3, h: 2 },
    { i: "r4", x: 8, y: 0, w: 3, h: 2 },
  ],
  lg: [
    { i: "l1", x: 0, y: 0, w: 3, h: 4, resizeHandles: ["e"] },
    { i: "m1", x: 3, y: 0, w: 2, h: 3 },
    { i: "m2", x: 3, y: 5, w: 2, h: 3 },
    { i: "r1", x: 8, y: 0, w: 3, h: 5 },
    { i: "l2", x: 0, y: 8, w: 3, h: 5 },
    { i: "m3", x: 3, y: 9, w: 2, h: 3 },
    { i: "r2", x: 8, y: 8, w: 3, h: 2 },
    { i: "r3", x: 8, y: 0, w: 3, h: 2 },
    { i: "r4", x: 8, y: 0, w: 3, h: 2 },
  ],
  md: [
    { i: "l1", x: 0, y: 0, w: 3, h: 4, resizeHandles: ["e"] },
    { i: "m1", x: 3, y: 0, w: 3, h: 3 },
    { i: "m2", x: 3, y: 3, w: 3, h: 3 },
    { i: "r1", x: 0, y: 8, w: 3, h: 4 },
    { i: "l2", x: 0, y: 8, w: 3, h: 5 },
    { i: "m3", x: 3, y: 5, w: 3, h: 3 },
    { i: "r2", x: 8, y: 8, w: 3, h: 2 },
    { i: "r3", x: 8, y: 0, w: 3, h: 2 },
    { i: "r4", x: 8, y: 0, w: 3, h: 2 },
  ],
  sm: [
    { i: "l1", x: 0, y: 0, w: 2, h: 3, resizeHandles: ["e"] },
    { i: "m1", x: 3, y: 0, w: 2, h: 2 },
    { i: "m2", x: 3, y: 0, w: 2, h: 2 },
    { i: "r1", x: 0, y: 0, w: 2, h: 3 },
    { i: "l2", x: 0, y: 0, w: 2, h: 4 },
    { i: "m3", x: 3, y: 0, w: 2, h: 2 },
    { i: "r2", x: 3, y: 0, w: 2, h: 2 },
    { i: "r3", x: 3, y: 0, w: 2, h: 2 },
    { i: "r4", x: 3, y: 0, w: 2, h: 2 },
  ],
  xs: [
    { i: "l1", x: 0, y: 0, w: 2, h: 3, resizeHandles: ["e"] },
    { i: "m1", x: 0, y: 0, w: 2, h: 2 },
    { i: "m2", x: 0, y: 0, w: 2, h: 2 },
    { i: "r1", x: 0, y: 0, w: 2, h: 3 },
    { i: "l2", x: 0, y: 0, w: 2, h: 4 },
    { i: "m3", x: 0, y: 0, w: 2, h: 2 },
    { i: "r2", x: 0, y: 0, w: 2, h: 2 },
    { i: "r3", x: 0, y: 0, w: 2, h: 2 },
    { i: "r4", x: 0, y: 0, w: 2, h: 2 },
  ]
};
export default function App() {
  return (
    <>
      <PageLayout layouts={layouts}>
        <div key="l1">l1</div>
        <div key="m1">m1</div>
        <div key="m2">m2</div>
        <div key="r1">r1</div>
        <div key="l2">l2</div>
        <div key="m3">m3</div>
        <div key="r2">r2</div>
        <div key="r3">r3</div>
        <div key="r4">r4</div>
      </PageLayout>
    </>
  );
}
