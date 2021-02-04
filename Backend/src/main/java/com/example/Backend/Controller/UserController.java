package com.example.Backend.Controller;

import com.example.Backend.Model.User;
import com.example.Backend.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RequestMapping("api/v1/User")
@RestController
public class UserController {
    private final UserService userService;
    @Autowired
    public UserController(UserService userService){this.userService=userService;}


    @CrossOrigin
    @PostMapping
    public void addUser(@RequestBody User user){
        userService.addUser(user);
    }

    @GetMapping
    public List<User> getUser(){
        return  userService.getAllUser();
    }

    @GetMapping(path="{id}")
    public User getUserById(@PathVariable("id") UUID id){
        return userService.getUSerById(id)
                .orElse(null);
    }

    @DeleteMapping(path = "{id}")
    public int deleteCarById(@PathVariable("id") UUID id){
        return userService.deleteUser(id);
    }


}
