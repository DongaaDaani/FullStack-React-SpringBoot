package com.example.Backend.Dao;

import com.example.Backend.Model.User;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Repository("users")
public class UserDataAccesService implements UserDao {
    private static List<User> userDB = new ArrayList<>();

    @Override
    public int insertUser(UUID id, User user) {
        userDB.add(new User(id,user.getName(), user.getUsername(),user.getPassword(),user.getComments()));
        return 1;
    }


    @Override
    public List<User> selectAllUser() {
        return userDB;
    }

    @Override
    public Optional<User> selectUserById(UUID Id) {
         return   userDB.stream()
                .filter(user -> user.getId().equals(Id))
                .findFirst();
    }

    @Override
    public int deleteUserById(UUID Id) {
        Optional<User>userDelete= selectUserById(Id);

        if(userDelete.isEmpty()){
            return 0;
        }
        userDB.remove(userDelete.get());
        return  1;
    }
}
