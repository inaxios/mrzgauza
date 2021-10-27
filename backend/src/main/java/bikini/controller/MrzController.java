package bikini.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import java.io.*;
import java.util.Arrays;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:8080")
public class MrzController {

    @GetMapping("/testa")
    public List<String> getTontakeria() {
        return Arrays.asList("oso", "ondo", "aizue", "baleba");
    }

    @GetMapping("/mrzs")
    public String getMrzs() {
        return getMrzStringa();
    }

    private String getMrzStringa() {
        StringBuilder emaitza = new StringBuilder();
        try {
            Process p = Runtime.getRuntime().exec("python3 /home/inaki/proiektuak/mrz_detector/peyerena.py /home/inaki/proiektuak/mrz_detector/samples/sp1.jpg");

            BufferedReader stdInput = new BufferedReader(new InputStreamReader(p.getInputStream()));
            BufferedReader stdError = new BufferedReader(new InputStreamReader(p.getErrorStream()));

            // read the output from the command
            System.out.println("Here is the standard output of the command:\n");
            String s;
            while ((s = stdInput.readLine()) != null) {
                emaitza.append(s);
            }

            // read any errors from the attempted command
            System.out.println("Here is the standard error of the command (if any):\n");
            while ((s = stdError.readLine()) != null) {
                emaitza.append(s);
            }
        } catch(Exception ex) {
            emaitza.append("bollocks");
            ex.printStackTrace();
        }
        String result = "{" + emaitza.toString().split("\\{")[1].split("}")[0] + "}";
        return result.replace("'", "\"");
    }
}