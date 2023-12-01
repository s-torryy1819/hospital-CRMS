package com.example.demo.Security.Services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.demo.Repositories.UserRepository;
import com.example.demo.Security.Models.Authorities;
import com.example.demo.Security.Models.User;

@Service
public class SecurityUserDetailsService implements UserDetailsService {

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(final String username)
            throws UsernameNotFoundException {
        return getUserByUsername(username);
    }

    public void createUser(final String userName, final String password, final List<Authorities> auths) {
        createUser(userName, password, auths, new User());
    }

    public void createUser(final String userName, final String password, final List<Authorities> auths,
            final User user) {

        user.setUsername(userName);
        user.setPassword(passwordEncoder.encode(password));
        user.setAuths(auths);

        saveUser(user);

    }

    public void deleteUser(final String username) {
        User user = getUserByUsername(username);
        userRepository.delete(user);
    }

    public User getUserByUsername(final String username) {
        return userRepository.findUserByUsername(username)
                .orElseThrow(() -> new UsernameNotFoundException("User not present"));
    }

    public void saveUser(final UserDetails user) {
        userRepository.save((User) user);
    }

    public List<User> getAllUsers() {
        return userRepository.findAll();
    }
}
