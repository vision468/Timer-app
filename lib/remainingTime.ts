let  RemainingTime: (x: Date) => Date

RemainingTime = (targetTime) => {
    const q = new Date()
    console.log('begin time', q.getFullYear())
    console.log('end time', targetTime.getFullYear())
    const diff = targetTime.getTime() - q.getTime() ;
    const k = new Date(diff > 0 ? diff : 0)
    return k
}

export default RemainingTime;