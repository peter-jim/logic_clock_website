import "./comp.scss"
export default function Content() {
  return (
    <>
      <div className="home-content">
        <h1>LogicClock</h1>
        <h2>因果关系的最佳方式</h2>
        <p>为所有用户设计。为开发者开发。</p>
        <div className="library-link">
          <div className="link w-radius">
            <span className="">npm init @logic-clock/@latest</span>
            <button className="w-btn link-btn">
              <svg fill="none" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><title>Copy</title><path d="M3.875 19.727c0 1.687.867 2.562 2.54 2.562h7.312c1.671 0 2.53-.883 2.53-2.562V18.28h1.329c1.672 0 2.539-.875 2.539-2.562V9.53c0-1.023-.21-1.68-.828-2.312L15.398 3.25c-.585-.602-1.28-.828-2.18-.828h-2.945c-1.664 0-2.539.875-2.539 2.562v1.438h-1.32c-1.672 0-2.539.883-2.539 2.562v10.743Zm11.602-8.211L11.242 7.21c-.601-.61-1.11-.774-1.976-.781V5.07c0-.718.382-1.117 1.14-1.117h3.266v3.735c0 .968.515 1.468 1.476 1.468h3.446v6.469c0 .727-.375 1.125-1.14 1.125h-1.196v-3.031c0-1.055-.125-1.54-.781-2.203Zm-.524-4.024V4.586l3.242 3.289h-2.86c-.265 0-.382-.11-.382-.383Zm-9.547 12.14V9.079c0-.719.375-1.125 1.133-1.125h2.399v4.281c0 1.118.554 1.664 1.664 1.664h4.125v5.735c0 .726-.375 1.125-1.133 1.125H6.539c-.758 0-1.133-.399-1.133-1.125Zm5.344-7.085c-.32 0-.46-.14-.46-.461V8.25l4.226 4.297H10.75Z" fill="currentColor"></path></svg>
            </button>
          </div>
          <div className="vist">
            <a href="https://docs.hetu.org/aos-network/getting-started/overview" target="_blank" className="w-radius">View document</a>
          </div>
        </div>
      </div>
    </>
  )
}