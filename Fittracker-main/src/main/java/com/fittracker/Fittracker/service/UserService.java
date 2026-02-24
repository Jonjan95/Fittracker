package com.fittracker.Fittracker.service;

import com.fittracker.Fittracker.model.User;
import com.fittracker.Fittracker.repository.UserRepository;
import java.util.List;
import java.time.LocalDate;
import java.util.Optional;

import org.springframework.stereotype.Service;

@Service
public class UserService {

    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    public User saveUser(User user) {
        if (user.getDateCreated() == null) {
            user.setDateCreated(LocalDate.now());
        }
        return userRepository.save(user);
    }

    public Optional<User> authenticate(String userName, String password) {
        return userRepository.findByUserName(userName)
                .filter(user -> user.getPassword().equals(password));
    }
}