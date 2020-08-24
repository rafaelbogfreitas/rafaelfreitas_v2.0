import Head from 'next/head'
import { useDispatch, useSelector } from "react-redux";
import { ApplicationState } from "../redux/store";
import { increaseCounter, decreaseCounter } from "../redux/actions/counter"
export default function Home() {

  const dispatch = useDispatch();
  const { count } = useSelector((state: ApplicationState) => ({
    count: state.count
  }));

  const increaseCount = () => {
    dispatch(increaseCounter())
  }

  const decreaseCount = () => {
    dispatch(decreaseCounter())
  }

  return (
    <div>
      <Head>
        <title>Rafael</title>
      </Head>
      <h1>{count}</h1>
      <button onClick={increaseCount}>INCREASE</button>
      <button onClick={decreaseCount}>DECREASE</button>
      <img src="./images/rafael.svg" />
    </div>
  )
}
