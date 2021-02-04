package com.example.Backend.Dao;

import com.example.Backend.Model.Comment;
import com.example.Backend.Model.User;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

public interface UserDao {
    int insertUser(UUID id, User user);

    default  int insertUser(User user){
        UUID id = UUID.randomUUID();
        return  insertUser(id,user);
    }
    List<User> selectAllUser();
    Optional<User> selectUserById(UUID Id);
    int deleteUserById(UUID Id);

}
