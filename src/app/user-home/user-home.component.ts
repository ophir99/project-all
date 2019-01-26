import { Component, OnInit } from '@angular/core';
import { FormBuilder } from "@angular/forms";
import { TweetsService } from "./../services/tweets.service"
import { MatSnackBar } from '@angular/material';
@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent implements OnInit {
  menuArr= [
    {
      label: 'Products',
      subMenu: [
        {
          label: 'Web dev',
          route: '/webdev'
        },
        {
          label: 'Mob dev',
          route: '/mobdev'
        },
        {
          label: 'API dev',
          route: '/apidev'
        }
      ]
    },
    {
      label: 'services',
      subMenu: [
        {
          label: 'Cloud',
          route: '/cloud'
        },
        {
          label: 'Automation',
          route: '/automation'
        }
      ]
    }
  ];

  simpleF;
  posts = [];
  posts$;
  postId:string;
  constructor(
    private fb: FormBuilder,
    private tweetsService: TweetsService,
    private matSnackBar: MatSnackBar
  ) { 

    this.simpleF = this.fb.group({
      heading: [],
      body: []
    });

     this.tweetsService.getTweets().subscribe(
       res => {
        console.log(res);
        this.posts = res.response;
       }
     );

     this.posts$ = this.tweetsService.getTweets();
  }

  ngOnInit() {
  }

  createTweet(){
      console.log(this.simpleF.value);
      this.tweetsService.postTweet(
        {
          title: this.simpleF.value.heading,
          desc: this.simpleF.value.body
        }
      )
      .subscribe(
        res => {
          this.matSnackBar.open("Tweeted successfully", "", {
            duration: 2000
          })
        },
        err => {
          this.matSnackBar.open("Failed to tweet", "", {
            duration: 2000
          })
        }
      )

  }
  setValueForEditing(obj){
    this.postId = obj._id;
    this.simpleF.setValue({
      heading: obj.title,
      body: obj.desc
    })
  }

  editTweet(){
    this.tweetsService.updateTweet(this.postId, {
      title: this.simpleF.value.heading,
      desc: this.simpleF.value.body
    })
    .subscribe(
      res => {
        this.matSnackBar.open("Updated successfully")
      }
    )
  }

  deleteTweet(id){
    this.tweetsService.deleteTweet(id)
    .subscribe(
      res => {
        this.matSnackBar.open("Deleted successfully");
      }
    )
  }
}
