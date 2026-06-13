package com.ashutosh.backend.service;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.ashutosh.backend.entity.User;
import com.ashutosh.backend.repository.UserRepository;
import com.ashutosh.backend.security.JwtUtil;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;
    @Autowired
    private BCryptPasswordEncoder passwordEncoder;

    public User registerUser(User user) {

    user.setPassword(
        passwordEncoder.encode(user.getPassword())
    );

    return userRepository.save(user);
}
    public String loginUser(String email, String password) {

    User user = userRepository.findByEmail(email);

    if (user == null) {
        return "User not found";
    }

    if (!passwordEncoder.matches(password, user.getPassword())) {
        return "Invalid Password";
    }

    return JwtUtil.generateToken(user.getEmail());
}
}
