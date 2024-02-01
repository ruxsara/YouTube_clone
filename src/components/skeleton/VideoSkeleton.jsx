import React from 'react'

const VideoSkeleton = () => {
  return (
    <Grid sx={{ width: 280, marginRight: 0.5 }}  row>
    <Skeleton variant="rectangular" height={120} /><br/>
      <Grid container sx={{flexDirection:'row'}}>
      <Grid marginRight='20px' >
       <Skeleton variant="circular" width={30} height={30}/>

      </Grid>
      <Grid>
          <Skeleton variant="rounded" width='210px' sx={{mb:'5px'}}/>
          <Skeleton variant="rounded" width='160px'/>
      </Grid>
      
      </Grid>
      
</Grid>  
)
}

export default VideoSkeleton