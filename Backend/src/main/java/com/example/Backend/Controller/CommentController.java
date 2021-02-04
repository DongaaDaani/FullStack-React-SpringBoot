package com.example.Backend.Controller;


import com.example.Backend.Model.Comment;
import com.example.Backend.Model.User;
import com.example.Backend.Service.CommentService;
import com.example.Backend.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RequestMapping("api/v1/Comment")
@RestController
public class CommentController {

    private final CommentService commentService;
    @Autowired
    public CommentController(CommentService commentService){this.commentService=commentService;}



    @PostMapping
    public void addComment(@RequestBody Comment comment){
        commentService.addComment(comment);
    }

    @GetMapping
    public List<Comment> getComment(){
        return  commentService.getAllComment();
    }

    @GetMapping(path="{id}")
    public Comment getUserById(@PathVariable("id") UUID id){
        return commentService.getCommentById(id)
                .orElse(null);
    }

    @DeleteMapping(path = "{id}")
    public int deleteCommentById(@PathVariable("id") UUID id){
        return commentService.deleteComment(id);
    }

}
