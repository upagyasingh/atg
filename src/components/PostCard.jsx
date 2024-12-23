
import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import cd1 from "../assets/cd1.png"
import cd2 from "../assets/cd2.png"
import cd3 from "../assets/cd3.png"

import p1 from "../assets/p1.png"
import p2 from "../assets/p2.png"
import p3 from "../assets/p3.png"
import p4 from "../assets/p4.png"

import { Building2, Calendar, CalendarCheck, EllipsisIcon, EllipsisVerticalIcon, Eye, MapPin, PenLine, School, Share2 } from "lucide-react";

function PostCard() {
  const cardData = [
    {
      title: "Article",
      heading: "What if famous brands had regular fonts? Meet RegulaBrands!",
      desc: "I’ve worked in UX for the better part of a decade. From now on, I plan to rei…",
      author: "Sarthak Kamra",
      views: "1.4k",
      img : cd1,
      icon : <PenLine/>,
      avatar : p1
    },
    {
      title: "Education",
      heading:
        "Tax Benefits for Investment under National Pension Scheme launched by Government",
      desc: "I’ve worked in UX for the better part of a decade. From now on, I plan to rei…",
      author: "Sarah West",
      views: "1.4k",
      img : cd2,
      icon : <School/>,
      avatar : p2


    },
  ];

  const cardMeet = [
    {
      title: "Meetup",
      heading: "Finance & Investment Elite Social Mixer @Lujiazui",
      time: "Fri, 12 Oct, 2018",
      location: "Ahmedabad, India",
      author: "Ronal Jones",
      views: "1.4k",
      img : cd3,
      icon : <Calendar/>,
      avatar : p3


    },
  ];

  const cardJob = [
    {
      title: "Job",
      heading: "Software Developer",
      company: "Innovaccer Analytics Private Ltd.",
      location: "Noida, India",
      author: "Joseph Gray",
      views: "1.4k",
      icon :<Building2/>,
      avatar : p4

    },
  ];

  return (
    <div className="mt-3">
      {cardData.map((data,ind) => (
        <Card sx={{ maxWidth: 650 }} className="mb-4" key={ind}>
          <CardMedia
            sx={{ height: 230 }}
            image={data.img}
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            <div className="flex gap-3">
            {data.icon} {data.title}
            </div>
            </Typography>
            <Typography gutterBottom variant="h6" component="div">
            <div className="flex gap-3 justify-between">
            <b>{data.heading}</b>
            <EllipsisIcon/>
            </div>
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              {data.desc}
            </Typography>
          </CardContent>
         <div className="h-[70px] w-100% flex items-center justify-between px-3">

            <div className="w-[200px] h-[50px] flex items-center justify-around">
                <img className="rounded-full h-10" src={data.avatar}/>
                <span>{data.author}</span>
            </div>

            <div className="flex gap-5 items-center">
            <div className="flex gap-2 items-center">
            <Eye className="font-thin"/>  {data.views} views
            </div>
           
                <div className="bg-slate-500 p-1 rounded-md">
                <Share2/>
                </div>
            </div>
         </div>
        </Card>
      ))}
          {cardMeet.map((data,ind) => (
        <Card sx={{ maxWidth: 650 }} className="mb-4" key={ind}>
          <CardMedia
            sx={{ height: 230 }}
            image={data.img}
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            <div className="flex gap-3">
            {data.icon} {data.title}
            </div>
            </Typography>
            <Typography gutterBottom variant="h6" component="div">
            <div className="flex gap-3 justify-between">
            <b>{data.heading}</b>
            <EllipsisIcon/>
            </div>
            </Typography>
            <Typography gutterBottom variant="h7" component="div">
            <div className="flex justify-around mt-2">
            <p className="flex gap-2"><CalendarCheck/> {data.time}</p>
            <p className="flex gap-2"><MapPin/> {data.location}</p>
            </div>
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
            <Button variant="outlined" color="error" className="w-full">Visit Website</Button>
            </Typography>
            
          </CardContent>
         <div className="h-[70px] w-100% flex items-center justify-between px-3">

            <div className="w-[200px] h-[50px] flex items-center justify-around">
                <img className="rounded-full h-10" src={data.avatar}/>
                <span>{data.author}</span>
            </div>

            <div className="flex gap-5 items-center">
            <div className="flex gap-2 items-center">
            <Eye className="font-thin"/>  {data.views} views
            </div>
           
                <div className="bg-slate-500 p-1 rounded-md">
                <Share2/>
                </div>
            </div>
         </div>
        </Card>
      ))}

{cardJob.map((data,ind) => (
        <Card sx={{ maxWidth: 650 }} className="mb-4" key={ind}>
          
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            <div className="flex gap-3">
            {data.icon} {data.title}
            </div>
            </Typography>
            <Typography gutterBottom variant="h6" component="div">
            <div className="flex gap-3 justify-between">
            <b>{data.heading}</b>
            <EllipsisIcon/>
            </div>
            </Typography>
            <Typography gutterBottom variant="h7" component="div">
            <div className="flex justify-around mt-2">
            <p className="flex gap-2"><Building2/> {data.company}</p>
            <p className="flex gap-2"><MapPin/> {data.location}</p>
            </div>
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
            <Button variant="outlined" color="success" className="w-full">Apply on TimesJob</Button>
            </Typography>
            
          </CardContent>
         <div className="h-[70px] w-100% flex items-center justify-between px-3">

            <div className="w-[200px] h-[50px] flex items-center justify-around">
                <img className="rounded-full h-10" src={data.avatar}/>
                <span>{data.author}</span>
            </div>

            <div className="flex gap-5 items-center">
            <div className="flex gap-2 items-center">
            <Eye className="font-thin"/>  {data.views} views
            </div>
           
                <div className="bg-slate-500 p-1 rounded-md">
                <Share2/>
                </div>
            </div>
         </div>
        </Card>
      ))}
    </div>
  );
}

export default PostCard;
