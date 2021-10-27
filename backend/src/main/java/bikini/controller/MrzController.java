package bikini.controller;

import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.*;
import java.util.Arrays;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:8080")
public class MrzController {

    @GetMapping("/testa")
    public List<String> getTontakeria() {
        return Arrays.asList("oso", "ondo", "aizue", "musho musho");
    }

    @GetMapping("/mrzs")
    public String getMrzs() {
        return getMrzStringaAdibidea();
    }

    @PostMapping("/mrzs/uploadnew")
    public String uploadNew(@RequestParam("thefile")MultipartFile multipartFile) {
        //irudia gorde lehenengo
        File file = new File("/home/inaki/proiektuak/mrz_detector/something_uploaded");
        try (OutputStream os = new FileOutputStream(file)) {
            os.write(multipartFile.getBytes());
        } catch(Exception ex) {
            ex.printStackTrace();
        }


        String txorizoa = getMrzTxorizoa("/home/inaki/proiektuak/mrz_detector/something_uploaded");
        System.out.println("\n\n\n\n================================ txianannia nia nianannannnnn");
        System.out.println(txorizoa);
        return txorizoa;
    }

    private String getMrzTxorizoa(String filePath) {
        StringBuilder emaitza = new StringBuilder();
        try {
            Process p = Runtime.getRuntime().exec("python3 /home/inaki/proiektuak/mrz_detector/peyerena.py " + filePath);

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

    private String getMrzStringaAdibidea() {
        return getMrzTxorizoa("/home/inaki/proiektuak/mrz_detector/samples/sp1.jpg");
    }
}
