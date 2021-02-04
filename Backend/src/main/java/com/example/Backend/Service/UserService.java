package com.example.Backend.Service;

import com.example.Backend.Dao.UserDao;
import com.example.Backend.Model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class UserService {

    private final UserDao userDao;
    @Autowired
    public UserService(@Qualifier("users") UserDao userDao) {
        this.userDao = userDao;
    }

    public int addUser(User user){
        return userDao.insertUser(user);
    }

    public List<User> getAllUser(){
        return userDao.selectAllUser();
    }


    public Optional<User> getUSerById(UUID id){
        return userDao.selectUserById(id);
    }

    public int deleteUser(UUID id){
        return userDao.deleteUserById(id);
    }

}
