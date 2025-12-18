

export const loggerMiddleware = (err,req,res,next)=>{
    console.log(`[${new Date.toString()}] ${req.path} ${req.params}`)
    next()
}