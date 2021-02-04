package com.example.Backend.Service;

import com.example.Backend.Dao.CommentDao;
import com.example.Backend.Dao.UserDao;
import com.example.Backend.Model.Comment;
import com.example.Backend.Model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;


@Service
public class CommentService {

    private final CommentDao commentDao;
    @Autowired
    public CommentService(@Qualifier("comments") CommentDao commentDao) {
        this.commentDao = commentDao;
    }

    public int addComment(Comment comment){
        return commentDao.insertComment(comment);
    }

    public List<Comment> getAllComment(){
        return commentDao.selectAllComment();
    }


    public Optional<Comment> getCommentById(UUID id){
        return commentDao.selectCommentById(id);
    }

    public int deleteComment(UUID id){
        return commentDao.deleteCommentById(id);
    }
}
