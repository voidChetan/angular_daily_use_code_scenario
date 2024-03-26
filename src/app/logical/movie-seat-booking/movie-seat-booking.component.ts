import { Component } from '@angular/core';

@Component({
  selector: 'app-movie-seat-booking',
  templateUrl: './movie-seat-booking.component.html',
  styleUrls: ['./movie-seat-booking.component.css']
})
export class MovieSeatBookingComponent {
  movieList: any[] = [
    {
      movieName: 'Rocketry: The Nambi Effect',
      ticketRate: '250',
      movieBannerImage: 'https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/rocketry-et00094131-1655809015.jpg',
      description: 'Based on the life of Indian Space Research Org scientist Nambi Narayanan, who was framed for being a spy ',
      shows: ['09.00 AM - 12.00 AM', '12.30 PM - 1.30 PM', ' 1.30 PM - 3.30'],
      seatRows:[
        {row:'A', noOfSeats: 8},
        {row:'B', noOfSeats: 4},
        {row:'C', noOfSeats: 5}, 
        {row:'D', noOfSeats: 10}
      ]
    },
    {
      movieName: '3 Idiots',
      ticketRate: '300',
      movieBannerImage:'https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/3-idiots-et00001611-1696834910.jpg',
      description: 'Two friends are searching for their long lost companion. They revisit their college days and recall the memories.',
      shows: ['10.00 AM - 12.00 PM', '03.00 PM - 6.00 PM'],
      seatRows:[
        {row:'A', noOfSeats: 8},
        {row:'B', noOfSeats: 8},
        {row:'C', noOfSeats: 8},
        {row:'D', noOfSeats: 8},
        {row:'E', noOfSeats: 8}, 
        {row:'F', noOfSeats: 10}
      ]
    },
    {
      movieName: 'Dangal',
      movieBannerImage:'https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/dangal-et00033292-17-04-2017-17-54-21.jpg',
      ticketRate: '200',
      description: 'wrestler Mahavir Singh Phogat and his two wrestler daughters struggle towards glory at the Commonwealth Games.',
      shows: ['04.00 PM - 07.00 PM'],
      seatRows:[
        {row:'A', noOfSeats: 8},
        {row:'B', noOfSeats: 8},
        {row:'C', noOfSeats: 8},
        {row:'D', noOfSeats: 8},
        {row:'E', noOfSeats: 8},
        {row:'F', noOfSeats: 8},
        {row:'G', noOfSeats: 8},
        {row:'H', noOfSeats: 10}
      ]
    },
    {
      movieName: 'Drishyam 2',
      ticketRate: '240',
      movieBannerImage:'https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/drishyam-2-et00331997-1667547668.jpg',
      description: 'an investigation and a family which is threatened by it. Will Georgekutty be able to protect his family this time?',
      shows: ['11.00 AM - 02.00 PM', '02.00 PM - 05.00 PM'],
      seatRows:[
        {row:'A', noOfSeats: 8},
        {row:'B', noOfSeats: 8},
        {row:'C', noOfSeats: 8},
        {row:'D', noOfSeats: 8},
        {row:'E', noOfSeats: 8},
        {row:'F', noOfSeats: 8},
        {row:'G', noOfSeats: 8},
        {row:'H', noOfSeats: 10}
      ]
    },
    {
      movieName: 'Avatar: The Way of Water',
      ticketRate: '350',
      movieBannerImage:'https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/avatar-the-way-of-water-et00037264-1670850986.jpg',
      description: "Sixteen years after the Na'vi repelled the RDA invasion of Pandora,[a] Jake Sully lives as chief of the Omatikaya clan and raises a family with Neytiri, which includes sons Neteyam and Lo'ak, daughter Tuk, and adopted daughter Kiri ",
      shows: ['09.00 AM - 11.30 PM', '11.00 AM - 02.00 PM', '02.00 PM - 05.00 PM'],
      seatRows:[
        {row:'A', noOfSeats: 8},
        {row:'B', noOfSeats: 8},
        {row:'C', noOfSeats: 8},
        {row:'D', noOfSeats: 8},
        {row:'E', noOfSeats: 8},
        {row:'F', noOfSeats: 8},
        {row:'G', noOfSeats: 8},
        {row:'H', noOfSeats: 10}
      ]
    },
    {
      movieName: 'Clash of the Titans',
      ticketRate: '200',
      movieBannerImage:'https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/clash-of-the-titans--2d--et00004487-24-03-2017-18-50-31.jpg',
      description: 'Born of god but raised by humans, Perseus, the demigod son of mighty Zeus, the king of the gods, vows to take his revenge on Hades, the terrifying ruler of ',
      shows: ['10.00 AM - 12.00 PM', '11.00 AM - 02.00 PM', '02.00 PM - 05.00 PM', '05.00 PM - 07.00 PM'],
      seatRows:[
        {row:'A', noOfSeats: 8},
        {row:'B', noOfSeats: 8},
        {row:'C', noOfSeats: 8},
        {row:'D', noOfSeats: 8},
        {row:'E', noOfSeats: 8},
        {row:'F', noOfSeats: 8},
        {row:'G', noOfSeats: 8},
        {row:'H', noOfSeats: 10}
      ]
    }
  ];
  selectedMovie: string = '';
  selectedMovieObj: any;

  bookedSeatNoList: any []= [];



  onMovieChange() { 
    const movieData =  this.movieList.find(m => m.movieName == this.selectedMovie);
    if(movieData != undefined) {
      this.selectedMovieObj = movieData;
    }
  }

  getSeatNoArray (totalSeats) { 
    let seatArray = [];
    for (let index = 1; index <= totalSeats; index++) {
      seatArray.push(index)
    }
    return seatArray;
  }

  bookSeat(rowName, seatNo) {
    const isDataExist =  this.bookedSeatNoList.find(m=>m.rowName == rowName && m.seatNo == seatNo);
    if(isDataExist == undefined) {
      const seatObj = {
        rowName: rowName,
        seatNo: seatNo
      };
      this.bookedSeatNoList.push(seatObj)
    } else {
      const rowIndexToDelete =  this.bookedSeatNoList.findIndex(m=>m.rowName == rowName && m.seatNo == seatNo);
      this.bookedSeatNoList.splice(rowIndexToDelete,1) 
    } 
  }

  checkIfSeatIsBooked(row,seatNo) {
    const isDataExist =  this.bookedSeatNoList.find(m=>m.rowName == row && m.seatNo == seatNo);
    if(isDataExist == undefined) {
      return false
    }  else {
      return true;
    }
  }

  

}
