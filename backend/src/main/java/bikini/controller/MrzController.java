package bikini.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:8080")
public class MrzController {

    @GetMapping("/mrzs")
    public List<String> getMrzs() {
        return Arrays.asList("oso", "ondo");
    }
}
