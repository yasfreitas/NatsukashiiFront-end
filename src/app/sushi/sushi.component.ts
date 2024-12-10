import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostService } from '../model/service/post.service';
import { Ipost } from '../model/service/ipost';
import { HttpClientModule } from '@angular/common/http';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-sushi',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  providers: [PostService],
  templateUrl: './sushi.component.html',
  styleUrl: './sushi.component.scss'
})
export class SushiComponent implements OnInit{
  posts: Ipost[] = [];
  constructor(private postService : PostService){}

  ngOnInit(): void {
      this.postService.getPosts().subscribe((post) => {
        this.posts = post;
      });
  }

}
