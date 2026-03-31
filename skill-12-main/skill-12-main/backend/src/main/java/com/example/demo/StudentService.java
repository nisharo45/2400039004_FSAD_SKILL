
package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StudentService {

    @Autowired
    private StudentRepository repo;

    public List<Student> getAll(){
        return repo.findAll();
    }

    public Student save(Student s){
        return repo.save(s);
    }

    public void delete(Long id){
        repo.deleteById(id);
    }

    public Student update(Long id,Student newData){
        Student s = repo.findById(id).orElseThrow();
        s.setName(newData.getName());
        s.setEmail(newData.getEmail());
        s.setCourse(newData.getCourse());
        return repo.save(s);
    }
}
