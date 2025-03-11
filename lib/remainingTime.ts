let  RemainingTime: (x: Date) => Date

RemainingTime = (targetTime) => {
    const currentDate = new Date()
    const diff = targetTime.getTime() - currentDate.getTime() ;
    return new Date(diff > 0 ? diff : 0)

}

export default RemainingTime;