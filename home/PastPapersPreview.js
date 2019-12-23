import PaperView from "../common/PaperView";
import { Document, Page } from "react-pdf";

const PastPapersPreview = props => (
  <div>
    <style>{``}</style>

    <div className="columns">
      <div className="column">
        <PaperView
          href="https://drive.google.com/file/d/1BWxinxY0WDFn5fKMqgAuQ1TjjbMOj_mI/view?usp=sharing"
          src="https://cxc-store.com/media/catalog/product/cache/1/small_image/240x/17f82f742ffe127f42dca9de82fb58b1/9/7/9780230482104_3.jpg"
        />
        <PaperView
          href="https://drive.google.com/file/d/1GuvAoEW6iAaGkNOwd_8Wdgd4cdiQ42PL/view?usp=sharing"
          src="https://cxc-store.com/media/catalog/product/cache/1/small_image/240x/17f82f742ffe127f42dca9de82fb58b1/9/7/9780230482456_25.jpg"
        />
        <PaperView src="https://cxc-store.com/media/catalog/product/cache/1/small_image/240x/17f82f742ffe127f42dca9de82fb58b1/9/7/9780230481831_23.jpg" />
        <PaperView src="https://cxc-store.com/media/catalog/product/cache/1/small_image/240x/17f82f742ffe127f42dca9de82fb58b1/9/7/9780230482661_25.jpg" />
        <PaperView
          href="https://drive.google.com/open?id=1tqA_1detFGFcTrp5LWQQdKzDglrGuUUw"
          src="https://cxc-store.com/media/catalog/product/cache/1/small_image/240x/17f82f742ffe127f42dca9de82fb58b1/9/7/9780230482586_3.jpg"
        />
        <PaperView src="https://cxc-store.com/media/catalog/product/cache/1/small_image/240x/17f82f742ffe127f42dca9de82fb58b1/9/7/9780230482876_3.jpg" />
        <PaperView
          href="https://drive.google.com/file/d/1MZRz6QafC43548ocvA1kwHPny2lxjKfn/view?usp=sharing"
          src="https://cxc-store.com/media/catalog/product/cache/1/small_image/240x/17f82f742ffe127f42dca9de82fb58b1/9/7/9780230482494_3.jpg"
        />
        <PaperView
          href="https://drive.google.com/open?id=1FOh2uvXJ-41Mf5FIHb1p1h4M1HVuLpC4"
          src="https://cxc-store.com/media/catalog/product/cache/1/small_image/240x/17f82f742ffe127f42dca9de82fb58b1/9/7/9780230482784_5.jpg"
        />
        <PaperView
          href="https://drive.google.com/drive/folders/16nrq6jlNy_0s4dJ0njavs15Ps3PylTDS?usp=sharing"
          src="https://cxc-store.com/media/catalog/product/cache/1/small_image/240x/17f82f742ffe127f42dca9de82fb58b1/9/7/9780230482234_5.jpg"
        />
      </div>
      <div className="col-sm-6 col-md-4 col-lg-4"></div>
    </div>
  </div>
);

export default PastPapersPreview;
