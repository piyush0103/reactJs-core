import './App.css';
import BasicForm from './component/forms/BasicForm';
import MountingLifeCycleDemo from './component/lifeCycle/Mounting/MountingLifeCycleDemo';
import List from './component/other/List';
import Click from './component/other/click';
import Parent from './component/refs/Parent';
import AllCombined from './component/styles/AllCombined';
import Inline from './component/styles/Inline';
import StyleSheet from './component/styles/StyleSheet';
import PortalDemo from './component/portals/portalDemo';
import ThrowsError from './component/error-handlers/ThrowsError';
import ErrorComponent from './component/error-handlers/ErrorComponent';
// import ClickCounter from './component/HOF/ClickCounter';
// import HoverCounter from './component/HOF/HoverCounter';
import ClickCounter from './component/RenderProps/ClickCounter';
import HoverCounter from './component/RenderProps/HoverCounter';
import RenderCounter from './component/RenderProps/RenderCounter';
// import ComponentA from './component/Context/ComponentA';
import RequestServer from './component/http/RequestServer';
import PostForm from './component/http/PostForm';
import Counter from './component/hooks/Counter';
import SetStateArray from './component/hooks/SetStateArray';
import UseeffectAftrRender from './component/hooks/useeffect/UseeffectAftrRender';
import RunEffectOnlyOnce from './component/hooks/useeffect/RunEffectOnlyOnce';
import CleanupEffect from './component/hooks/useeffect/CleanupEffect';
import UseeffectIncorrect from './component/hooks/useeffect/UseeffectIncorrect';
import FetchWithUseEffect from './component/hooks/useeffect/FetchWithUseEffect';
import ComponentA from './component/hooks/useContext/ComponentA';
import CounterReducer from './component/hooks/useReducer/CounterReducer';
import CounterReducerComplex from './component/hooks/useReducer/CounterReducerComplex'
import Counter1 from './component/methodProp/Counter1';
import ReducerCounter0 from './component/hooks/useReducer/context/ReducerCounter0';
import UseReducerWithFetch from './component/hooks/useReducer/fetch/UseReducerWithFetch';
import ParentComp from './component/hooks/useCallBack/ParentComp';
import TestRerenders from './component/hooks/useeffect/TestRerenders';
import CounterMemo from './component/hooks/useMemoHook/CounterMemo';

function App() {
	var give = '';
	const callMe = (what) => {
		console.log('call me what ', what);
		give = 'call me what ' + what;
		alert(give);
	};
	return (
		<div className='App'>
			{/* <MountingLifeCycleDemo obj={{name:'pisyu',id:12,refer:(red)=>console.log("reciveed from child ",red)}}></MountingLifeCycleDemo> */}
			{/* <Demo1 names ="some name " read="some">oh this is how</Demo1>
      <h1>{give}</h1>
      <Click callMe={callMe}></Click>
      <List></List>
      <StyleSheet cName="secondary"></StyleSheet>
      <Inline></Inline> */}
			{/* <AllCombined></AllCombined> */}
			{/* <BasicForm></BasicForm> */}
			{/* <Parent></Parent> */}
			{/* <PortalDemo></PortalDemo> */}
			{/* <ErrorComponent>
   <ThrowsError name="ASHISH"></ThrowsError>
</ErrorComponent>

<ErrorComponent>
   <ThrowsError name="PIYUSH"></ThrowsError>
</ErrorComponent>
<ErrorComponent>
   <ThrowsError name="PP"></ThrowsError>
  
   </ErrorComponent> */}
			{/* <div>
    <ClickCounter></ClickCounter>
    </div>
    <div>
<HoverCounter></HoverCounter>
    </div> */}
			/* Render props
			{/* <RenderCounter render={(state,handleCounter)=>{
return<ClickCounter counterState={state}handleCounter={handleCounter} counterName="somThiong"></ClickCounter>
}}></RenderCounter>


<RenderCounter render={(state,handleCounter)=>{
return<HoverCounter counterState={state}handleCounter={handleCounter} counterName="somThiong"></HoverCounter>
}}></RenderCounter>
// End of render props
    </div> */}
			{/* <ComponentA></ComponentA> */}
			{/* <RequestServer></RequestServer> */}
			{/* <PostForm></PostForm> */}

			{/* <Counter></Counter> */}
			{/* <SetStateArray></SetStateArray> */}
			{/* <UseeffectAftrRender></UseeffectAftrRender> */}
			{/* <RunEffectOnlyOnce></RunEffectOnlyOnce> */}
			{/* <CleanupEffect></CleanupEffect> */}
			{/* <UseeffectIncorrect></UseeffectIncorrect> */}
			{/* <FetchWithUseEffect></FetchWithUseEffect> */}
			{/* <ComponentA></ComponentA> */}
			{/* <CounterReducer></CounterReducer> */}
			{/* <CounterReducerComplex></CounterReducerComplex>
			 */}
			 {/* <Counter1></Counter1> */}
			 {/* <ReducerCounter0></ReducerCounter0> */}
			 {/* <UseReducerWithFetch></UseReducerWithFetch> */}
			 {/* <ParentComp></ParentComp> */}
			 {/* <TestRerenders></TestRerenders> */}
			 <CounterMemo></CounterMemo>
		</div>
	);
}

export default App;
