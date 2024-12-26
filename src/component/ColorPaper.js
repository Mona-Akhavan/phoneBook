const colorPaper = ({setBgPaper}) =>{
    return(
        <div className='flex mt-2  W-div gap-1 '>
        <div className='flex'>
          <div onClick={() => setBgPaper(1)} className={`colorPaper bg-paper-1`}></div>
          <div onClick={() => setBgPaper(2)} className={`colorPaper bg-paper-2`}></div>
          <div onClick={() => setBgPaper(3)} className={`colorPaper bg-paper-3`}></div>
          <div onClick={() => setBgPaper(4)} className={`colorPaper bg-paper-4`}></div>
          <div onClick={() => setBgPaper(5)} className={`colorPaper bg-paper-5`}></div>
        </div>
        <p className='text-xs my-auto mx-1'>Choose the paper color</p>
      </div>
    )
}
export default colorPaper;