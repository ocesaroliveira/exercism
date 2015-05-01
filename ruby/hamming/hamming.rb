class Hamming
    def self.compute(a, b)
        count = 0
        a.each_char.with_index { |char, i|
            if char != b[i]
                count = count + 1
            end
        }
        count
    end
end
