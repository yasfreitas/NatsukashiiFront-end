import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Ipost } from '../model/service/ipost';
import { Router } from '@angular/router';
import { PostService } from '../model/service/post.service';
import Swal from 'sweetalert2';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-blog',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  providers: [PostService],
  templateUrl: './form-sushi.component.html',
  styleUrl: './form-sushi.component.scss'
})
export class FormSushiComponent {
    post: Ipost = {
    nome: '',
    preco: 0,
    descricao: '',
    imageUrl: ''
  };
  constructor(private postService: PostService, private router: Router)
{}
  onSubmit(): void {
    this.postService.addPost(this.post).subscribe(
      (response) => {
        Swal.fire({
          title: "Prato Cadastrado!",
          text: "",
          icon: "success",
        }).then((result) => {
          if (result.isConfirmed){
            this.router.navigate(['/']);
          }
        });
      },
      (error) => {
        console.error('Erro ao adicionar o prato:', error);
      }
    )
  }
}
